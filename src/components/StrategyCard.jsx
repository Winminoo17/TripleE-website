useEffect(() => {
  const currentCard = cardRef.current;  // ✅ Store it in a variable!
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    { threshold: 0.1 }
  );

  if (currentCard) {  // ✅ Use the variable
    observer.observe(currentCard);
  }

  return () => {
    if (currentCard) {  // ✅ Use the same variable in cleanup
      observer.unobserve(currentCard);  // ✅ Now it's safe!
    }
  };
}, []);
