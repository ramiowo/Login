const Membership = () => {
  return (
    <Hashrouter>
      <Routes>
        <Route pate="/" element={<Home />}></Route>
        <Route pate="/login" element={<Login />}></Route>
        <Route pate="/signup" element={<Singup />}></Route>
      </Routes>
    </Hashrouter>
  );
};

export default Membership;
