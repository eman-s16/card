import img from './images/image-header-desktop.jpg';

function ImgMod() {
	return (
		<div className="imgMod">
			<img src={img} alt="ImgMod" />
			<div class="overlay"></div>
		</div>
	);
}

export default ImgMod;
