const updateScreenWidth = useCallback(() => {
  const newScreenWidth = window.innerWidth;
  setScreenWidth(newScreenWidth);
}, []);

// const updateScreenWidth = useCallback(() => {
//   const newScreenWidth = window.innerWidth;
//   setScreenWidth(newScreenWidth);
//   setElementHidden(newScreenWidth < 427);
// }, [])

// useLayoutEffect(() => {

//   updateScreenWidth();
//   console.log("vérification actualisation valeur écran dans le state",screenWidth);

//   window.addEventListener('resize', updateScreenWidth);
//   return () => window.removeEventListener('resize', updateScreenWidth);
// }, [updateScreenWidth]);


useEffect(() => {
  updateScreenWidth();
  window.addEventListener('resize', updateScreenWidth);
  return () => window.removeEventListener('resize', updateScreenWidth);
}, [updateScreenWidth]);
