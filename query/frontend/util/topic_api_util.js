export const fetchTopics = () => {
  return $.ajax({
    method: "GET",
    url: "/api/topics"
  });
};

export const createTopic = topic => {
  return $.ajax({
    method: 'POST',
    url: 'api/topics',
    data: { topic }
  });
};
