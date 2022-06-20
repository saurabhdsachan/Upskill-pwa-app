import dayjs from 'dayjs';
import { SESSION_TYPE } from './constants';
export const getShareMessage = ({ session, sessionUrl, creatorUserName, sessionType }) => {
  switch (sessionType) {
    case SESSION_TYPE.WORKSHOP:
      return `Hey! ${creatorUserName} is conducting a workshop on ${session?.title}.\n
      Price: ${session?.displayPrice}\n
      Language: ${session?.sessionLanguage}\n
      Booking Link and Details: ${sessionUrl}\n
      Joining Details: You can join the session using the same link under Bookings tab.\n
      Hurry! Seats filling up fast!\n
      Here's ${creatorUserName} website link for more offerings: https://pep.live/${creatorUserName}`;
    case SESSION_TYPE.COURSE:
      return `Hey! ${creatorUserName} is conducting a course on ${session?.title}. Here are the details:\n
      Total Sessions: ${session?.episodes?.length} \n
      Price: Rs. ${session?.displayPrice} \n
      Language: ${session?.sessionLanguage} \n
      Booking Link and Details: ${sessionUrl}\n
      Joining Details: You can join the session using the same link under Bookings tab.\n
      Hurry! Seats filling up fast!\n
      Here's ${creatorUserName} website link for more offerings: https://pep.live/${creatorUserName}`;
    case SESSION_TYPE.PLAN:
      return `Hey! ${creatorUserName} has launched a Subscription Plan on ${session?.title}. Below are the details:\n
      Time: ${dayjs(session?.planStartTime).format('hh:mm a')} - ${dayjs(session?.planStartTime)
        .add(session?.durationInMinutes, 'minutes')
        .format('hh:mm a')} \n
      Days: ${session?.daysOfWeek} \n
      Total Sessions: ${session?.totalSessions} \n
      Price: ${session?.currencyCode}${session?.price} \n
      Language: ${session?.sessionLanguage}\n
      Booking Link and Details: ${sessionUrl}\n
      Joining Details: You can join the session using the same link under Bookings tab. Hurry!! Seats filling fast\n
      Here's ${creatorUserName} for more offerings: https://pep.live/${creatorUserName}`;
    default:
      return `Find ${creatorUserName}'s website on this link https://pep.live/${creatorUserName}`;
  }
};
