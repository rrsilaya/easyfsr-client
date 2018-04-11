import { formatQueryParams } from '../../utils';

export const addCreativeWork = `
	INSERT INTO creativeWork (
		id,
		creativeWorkID,
		date,
		title,
		type,
		credUnit,
		filepath
	)
	VALUES (
		:id,
		DEFAULT,
		:date,
		:title,
		:type,
		:credUnit,
		:filepath
	)
`;

export const updateCreativeWork = creativeWork => `
	UPDATE creativeWork SET
	${formatQueryParams(creativeWork, 'update')}
	WHERE creativeWorkID = :creativeWorkID
`;

export const deleteCreativeWork = `
	DELETE FROM creativeWork
	WHERE creativeWorkID = :creativeWorkID
`;

export const getCreativeWorks = (query, sortBy) => `
	SELECT * FROM creativeWork ${
    query.length ? `WHERE ${formatQueryParams(query, 'get')}` : ''
  }
	ORDER BY [field] ${
    sortBy === 'DESC' ? 'DESC' : 'ASC'
  } LIMIT :limit OFFSET :offset
`;

export const getCreativeWork = `
	SELECT * FROM creativeWork
	WHERE creativeWorkID = :creativeWorkID
`;

export const getTotalCreativeWorks = query => `
	SELECT count(*) as total FROM creativeWork ${
    query.length ? `WHERE ${formatQueryParams(query, 'get')}` : ''
  }
`;
