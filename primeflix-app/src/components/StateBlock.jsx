function StateBlock({ type }) {
  if (type === "loading") {
    return <div>Loading...</div>;
  }

  if (type === "error") {
    return <div>Something went wrong.</div>;
  }

  if (type === "empty") {
    return <div>No movies found.</div>;
  }

  return null;
}

export default StateBlock;