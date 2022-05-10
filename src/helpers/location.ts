import qs from 'query-string';

const Const_Default_User = 'YaoZeyuan'

export function getSearchObj() {
  const search = typeof window !== 'undefined' && window.location.search;
  let query = qs.parse(search);

  if(query.user === undefined){
    query.user = Const_Default_User
  }

  return query || {};
}