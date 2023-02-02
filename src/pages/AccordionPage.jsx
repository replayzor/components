import Accordion from "../components/Accordion";

function AccordionPage() {
	const items = [
		{
			id: "1",
			label: "Can i use React on a project?",
			content:
				"You can use React on any project you want, You can use React on any project you want, You can use React on any project you want",
		},
		{
			id: "2",
			label: "Can i use JavaScript on a project?",
			content:
				"You can use JavaScript on any project you want, You can use React on any project you want, You can use React on any project you want",
		},
		{
			id: "3",
			label: "Can i use Tailwind CSS on a project?",
			content:
				"You can use Tailwind CSS on any project you want, You can use React on any project you want, You can use React on any project you want",
		},
	];

	return <Accordion items={items} />;
}

export default AccordionPage;
