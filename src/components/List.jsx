
import PropTypes from 'prop-types'

const List = (props) => {

  console.log('List props',props)
  const {name,age,email} = props

  return (<>
      <li className="hover:none hover:list-disc">{name} {age} {email}</li>
      </>
  )
}

List.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
}


export default List