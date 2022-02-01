const Card = ({ children }) => {
  return (
    <>
      <div className="card">{children}</div>

      <style jsx>{`
        .card {
          backgroud: #fff;
          border: 1px solid #f1f1f1;
          padding: 20px;
          border-radius: 10px;
        }
      `}</style>
    </>
  )
}

export default Card
