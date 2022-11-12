function useData(url) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (url) {
      let ignore = false;

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        })
        .catch(console.error);

      return () => {
        ignore = true;
      };
    }
  }, [url]);

  return data;
}
