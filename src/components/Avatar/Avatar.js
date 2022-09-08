// Responsible for displaying avatar in different sizes
import './Avatar.css'
export default function Avatar({size, image}) {
	
	return <div style={{width: size && size, height: size && size}} className="avatar avatar-container">
		<img src={image} alt=""/>
	</div>
}