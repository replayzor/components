import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
	const handleClick = () => {
		console.log("Mouse did something");
	};
	return (
		<div>
			<div>
				<Button success rounded outline className="mb-4" onClick={handleClick}>
					<GoBell />
					Success, rounded, outline
				</Button>
			</div>
			<div>
				<Button danger outline onMouseEnter={handleClick}>
					<GoCloudDownload />
					Danger, outline
				</Button>
			</div>
			<div>
				<Button warning onMouseLeave={handleClick}>
					<GoDatabase />
					WARNING!
				</Button>
			</div>
			<div>
				<Button secondary outline>
					Secondary, outline
				</Button>
			</div>
			<div>
				<Button primary rounded>
					Primary, rounded
				</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
