function useEffectOnChange(callback, deps) {
  const hasMounted = React.useRef(false);

  React.useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    callback();
  }, deps);
}
