import { getConnection, getRepository } from 'typeorm';
import { Response, Request } from 'express';

import User from '../database/entity/User';
import Class from '../database/entity/Class';
import ClassSchedule from '../database/entity/ClassSchedule';

import convertHourToMinutes from '../utils/convertHourToMinutes';

interface IScheduleItem {
  weekDay: number;
  to: string;
  from: string;
}

export default class ClassController {
  async index(req: Request, res: Response) {
    const classRepository = getRepository(Class);
    const filters = req.query;

    const time = filters.time as string;
    const subject = filters.subject as string;
    const weekDay = filters.weekDay as string;
    if (!filters.weekDay || !filters.subject || !filters.time) {
      return res
        .status(400)
        .json({ message: 'Missing filters to search classes' });
    }

    const timeToMinutes = convertHourToMinutes(time);

    const response = await classRepository
      .createQueryBuilder('class')
      .innerJoinAndSelect('class.user', 'user')
      .where('class.subject = :subject', { subject })
      .innerJoinAndSelect('class.classesSchedule', 'classesSchedule')
      .where('classesSchedule.weekDay = :weekDay', { weekDay: Number(weekDay) })
      .where('classesSchedule.from <= :time', { time: timeToMinutes })
      .where('classesSchedule.to > :time', { time: timeToMinutes })
      .getMany();

    return res.json(response);
  }

  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    try {
      const userTrx = await getConnection().transaction(
        async (transactionalEntityManager) => {
          const user = transactionalEntityManager.create(User, {
            name,
            avatar,
            whatsapp,
            bio,
          });

          await transactionalEntityManager.save(user);

          const userClass = transactionalEntityManager.create(Class, {
            user,
            cost,
            subject,
          });

          await transactionalEntityManager.save(userClass);

          const classScheduleParsed = schedule.map(
            (scheduleItem: IScheduleItem) => ({
              weekDay: scheduleItem.weekDay,
              from: convertHourToMinutes(scheduleItem.from),
              to: convertHourToMinutes(scheduleItem.to),
              class: userClass,
            })
          );

          const classSchedule = transactionalEntityManager.create(
            ClassSchedule,
            classScheduleParsed
          );

          await transactionalEntityManager.save(classSchedule);

          const userCreated = await transactionalEntityManager.findOne(
            User,
            user.id,
            {
              relations: ['classes', 'classes.classesSchedule'],
            }
          );

          return userCreated;
        }
      );

      return res.status(201).json(userTrx);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
