import { formatQueryParams } from '../../utils';

export const getNotification = `
	SELECT * FROM notification
	WHERE notificationID = :notificationID
`;

export const getAllNotifications = (query, sortBy) => `
	SELECT * FROM notification ${
    query.length ? `WHERE ${formatQueryParams(query)}` : ''
  } 
  ORDER BY [field] ${sortBy === 'DESC' ? 'DESC' : 'ASC'} LIMIT :limit
`;

export const updateNotification = notification => `
	UPDATE notification SET
	${formatQueryParams(notification)}
	WHERE notificationID = :notificationID
`;

export const addNotification = `
	INSERT INTO notification (
		notificationID,
		senderID,
		receiverID,
		message,
		dateSent,
		timeSent,
		isResolved
	)
	VALUES (
		:notificationID,
		:senderID,
		:receiverID,
		:message,
		:dateSent,
		:timeSent,
		:isResolved
	)
`;

export const deleteNotification = `
	UPDATE notification SET
		isResolved = true
	WHERE notificationID = :notificationID
`;
