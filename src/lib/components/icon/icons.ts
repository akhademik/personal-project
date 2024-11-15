// NOTE:
// get the icons from https://icones.js.org/ or https://www.svgrepo.com/
// make sure to edit the BOX to have correct display

export const icons = {
	hamburger: {
		box_width: 15,
		svg: `<path d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z" "></path>`,
	},
	flag_vi: {
		box_width: 32,
		box_height: 24,
		svg: `<defs><path id="flagpackVn0" fill="#fff" d="M0 0h32v24H0z"/></defs><g fill="none"><g clip-path="url(#flagpackVn2)"><use href="#flagpackVn0"/><path fill="#F7FCFF" fill-rule="evenodd" d="M0 0h32v24H0V0Z" clip-rule="evenodd"/><path fill="#E31D1C" fill-rule="evenodd" d="M0 0v24h32V0H0Z" clip-rule="evenodd"/><mask id="flagpackVn1" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0H0Z" clip-rule="evenodd"/></mask><g mask="url(#flagpackVn1)"><path fill="#FFD221" fill-rule="evenodd" d="m16.062 15.98l-5.15 3.275l1.727-5.733l-3.674-3.746l5.065-.11l2.241-5.66l2.042 5.734l5.053.089l-3.797 3.814l1.773 5.454l-5.28-3.117Z" clip-rule="evenodd"/></g></g><defs><clipPath id="flagpackVn2"><use href="#flagpackVn0"/></clipPath></defs></g>
    `,
	},
} as const
