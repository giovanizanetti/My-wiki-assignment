const WikiList = ({ items }) => {
  return (
    <section className='result mx-auto'>
      {items &&
        items.map((article) => (
          <article key={article.pageid}>
            <h1>{article.title}</h1>
            <p>
              A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own
              gravity.
            </p>
            <a target='_blank' href={article.fullurl} rel='noreferrer'>
              {article.fullurl}
            </a>
          </article>
        ))}
    </section>
  )
}

export default WikiList
