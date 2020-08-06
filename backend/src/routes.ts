import express from 'express';
import { getRepository, getConnection } from 'typeorm';

import User from './database/entity/User';
import Class from './database/entity/Class';
import ClassSchedule from './database/entity/ClassSchedule';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface IScheduleItem {
  weekDay: number;
  to: string;
  from: string;
}

routes.post('/classes', async (req, res) => {
  const userRepository = getRepository(User);
  const classRepository = getRepository(Class);
  const classScheduleRepository = getRepository(ClassSchedule);

  const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

  const user = userRepository.create({ name, avatar, whatsapp, bio });

  await userRepository.save(user);

  const userClass = classRepository.create({ user, cost, subject });

  await classRepository.save(userClass);

  const classScheduleParsed = schedule.map((scheduleItem: IScheduleItem) => ({
    weekDay: scheduleItem.weekDay,
    from: convertHourToMinutes(scheduleItem.from),
    to: convertHourToMinutes(scheduleItem.to),
    class: userClass,
  }));

  const classSchedule = classScheduleRepository.create(classScheduleParsed);

  await classScheduleRepository.save(classSchedule);

  const userCreated = await userRepository.findOne(user.id, {
    relations: ['classes', 'classes.classesSchedule'],
  });

  return res.json(userCreated);
});

export default routes;
