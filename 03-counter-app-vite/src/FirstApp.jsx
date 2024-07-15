import PropTypes from 'prop-types'
const myName = () => 'Leonardo Toledo';

export const FirstApp = ({username, edad}) => {
    //console.log(props);
  return (
    <>
        <h1 data-testid="username-test-id">{ username }</h1>
        <p>{ edad }</p>
    </>
  )
}

FirstApp.propTypes = {
    username: PropTypes.string.isRequired,
    edad: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    username: "No available username",
    edad: "No available age"
}