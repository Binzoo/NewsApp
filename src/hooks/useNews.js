async function useNews(title) {
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=${title}&from=2023-12-03&sortBy=publishedAt&apiKey=e10037a6ec8a45c087e356a2fe284aca`
  );
  const info = await data.json();
  return info.articles;
}

export default useNews;
