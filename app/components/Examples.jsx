var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Try out one of these examples, click on any of the locations below!</p>
      <ol>
        <li>
          <Link to='/?location=Milpitas'>Milpitas, CA</Link>
        </li>
        <li>
          <Link to='/?location=St. Louis'>St. Louis, MO</Link>
        </li>
        <li>
          <Link to='/?location=Dagupan'>Dagupan, Philippines</Link>
        </li>
        <li>
          <Link to='/?location=Makati'>Makati, Philippines</Link>
        </li>
        <li>
          <Link to='/?location=Dubai'>Dubai, United Arab Emirates</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
