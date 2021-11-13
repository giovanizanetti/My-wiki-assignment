import { HiOutlineTrash } from 'react-icons/hi'

const WikiList = ({ items, deleteArticle }) => {
  const handleDelete = (e) => {
    const id = Number(e.target.id)
    deleteArticle(id)
  }

  if (!items.length)
    return (
      <strong className='d-flex justify-content-center text-warning bg-dark mt-5'>You have no articles yet!</strong>
    )
  return (
    <section className='result mx-auto'>
      {items &&
        items.map((article) => (
          <article key={article.pageid}>
            <div className='d-flex justify-content-between align-items-center'>
              <h1>{article.title}</h1>
              <HiOutlineTrash
                id={article.pageid}
                onClick={(e) => handleDelete(e)}
                className='mt-n5 pointer'
                size={25}
              />
            </div>

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
