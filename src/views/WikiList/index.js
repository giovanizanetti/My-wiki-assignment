import { HiOutlineTrash } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_ARTICLES } from '../../config/constants'

const WikiList = () => {
  const { articles } = useSelector((state) => state.articles)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch({
      type: DELETE_ARTICLES,
      payload: id,
    })
  }

  if (!articles.length)
    return (
      <strong className='d-flex justify-content-center text-warning bg-dark mt-5'>You have no articles yet!</strong>
    )
  return (
    <section className='result mx-auto'>
      {articles &&
        articles.map((article) => {
          return (
            <article key={article.pageid}>
              <div className='d-flex justify-content-between align-items-center'>
                <h1>{article.title}</h1>
                <HiOutlineTrash
                  id={article.pageid}
                  onClick={() => handleDelete(article.pageid)}
                  className='mt-n5 pointer'
                  size={25}
                />
              </div>

              <p>{article.extract}</p>
              <a target='_blank' href={article.fullurl} rel='noreferrer'>
                {article.fullurl}
              </a>
            </article>
          )
        })}
    </section>
  )
}

export default WikiList
