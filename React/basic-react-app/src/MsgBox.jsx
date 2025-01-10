function MsgBox({ username, textColor }) {
  return (
    <>
      <h1 style={{ color: textColor }}>{username}</h1>
    </>
  );
}

export default MsgBox;
