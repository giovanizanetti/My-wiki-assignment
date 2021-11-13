const WikiList = ({ items }) => {
  if (!items.length)
    return (
      <strong className='d-flex justify-content-center text-warning bg-dark mt-5'>You have no articles yet!</strong>
    )
  return (
    <section className='result mx-auto'>
      {items &&
        items.map((article) => (
          <article key={article.pageid}>
            <h1>{article.title}</h1>
            <p>{article.extract}</p>
            <a target='_blank' href={article.fullurl} rel='noreferrer'>
              {article.fullurl}
            </a>
          </article>
        ))}
    </section>
  )
}

export default WikiList
