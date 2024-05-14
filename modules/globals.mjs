/**
 * @module globals
 */

let globals = {
	doubleClickThreshold: 150,
	screensaverPollInterval: 5000,
	reading: {
		linelength: "55rem",
		linelengthmax: "110rem",
		lineheight: "1.8rem",
		paragraphspacing: "1.1rem",
		fontfamily: '"Arial", sans-serif',
		fontsize: "1.2rem",
		screensaverdelay: 600000,
		enablescreensaver: true
	},
	theme: "custom",
	themeKeys: [],
	themes: {
		jw: {
			name: "Joshua's Theme",
			builtin: true,
			desktop: "#008080",
			applicationworkspace: "#C0C0C0",
			windowbackground: "#FFFFFF",
			windowtext: "#000000",
			menubar: "#FFFFFF",
			menutext: "#000000",
			activetitlebar: "#000080",
			inactivetitlebar: "#C0C0C0",
			activetitlebartext: "#FFFFFF",
			inactivetitlebartext: "#000000",
			activeborder: "#C0C0C0",
			inactiveborder: "#C0C0C0",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#C0C0C0",
			highlight: "#000080",
			highlightedtext: "#FFFFFF",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#000080",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		},
		jwdark: {
			name: "Joshua's Theme (Dark)",
			builtin: true,
			desktop: "#003030",
			applicationworkspace: "#000000",
			windowbackground: "#101010",
			windowtext: "#808080",
			menubar: "#000000",
			menutext: "#c0c0c0",
			activetitlebar: "#000040",
			inactivetitlebar: "#202020",
			activetitlebartext: "#808080",
			inactivetitlebartext: "#808080",
			activeborder: "#606060",
			inactiveborder: "#202020",
			windowframe: "#000000",
			scrollbars: "#404040",
			buttonface: "#606060",
			buttonshadow: "#000000",
			buttontext: "#000000",
			buttonhighlight: "#808080",
			disabledtext: "#606060",
			highlight: "#000040",
			highlightedtext: "#c0c0c0",
			systembuttonface: "#606060",
			systembuttonshadow: "#000000",
			systembuttontext: "#000000",
			systembuttonhighlight: "#808080",
			linkcolor: "#6080ff",
			posttextcolor: "#808080",
			headingcolor: "#000000"
		},
		windowsdefault: {
			name: "Windows Default",
			builtin: true,
			desktop: "#C0C0C0",
			applicationworkspace: "#C0C0C0",
			windowbackground: "#FFFFFF",
			windowtext: "#000000",
			menubar: "#FFFFFF",
			menutext: "#000000",
			activetitlebar: "#A4C8F0",
			inactivetitlebar: "#C0C0C0",
			activetitlebartext: "#000000",
			inactivetitlebartext: "#000000",
			activeborder: "#C0C0C0",
			inactiveborder: "#C0C0C0",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#C0C0C0",
			highlight: "#A4C8F0",
			highlightedtext: "#000000",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#000080",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		},
		arizona: {
			name: "Arizona",
			builtin: true,
			desktop: "#004080",
			applicationworkspace: "#FFFFFF",
			windowbackground: "#FFFFFF",
			windowtext: "#000000",
			menubar: "#FFFFFF",
			menutext: "#000000",
			activetitlebar: "#408080",
			inactivetitlebar: "#C0C0C0",
			activetitlebartext: "#FFFFFF",
			inactivetitlebartext: "#000000",
			activeborder: "#FF8040",
			inactiveborder: "#C0C0C0",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#808080",
			highlight: "#408080",
			highlightedtext: "#FFFFFF",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#004080",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		},
		blackleatherjacket: {
			name: "Black Leather Jacket",
			builtin: true,
			desktop: "#000000",
			applicationworkspace: "#C0C0C0",
			windowbackground: "#FFFFFF",
			windowtext: "#000000",
			menubar: "#C0C0C0",
			menutext: "#000000",
			activetitlebar: "#400080",
			inactivetitlebar: "#808080",
			activetitlebartext: "#FFFFFF",
			inactivetitlebartext: "#000000",
			activeborder: "#808080",
			inactiveborder: "#808080",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#808080",
			highlight: "#000000",
			highlightedtext: "#FFFFFF",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#400080",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		},
		bordeaux: {
			name: "Bordeaux",
			builtin: true,
			desktop: "#800040",
			applicationworkspace: "#C0C0C0",
			windowbackground: "#FFFFFF",
			windowtext: "#000000",
			menubar: "#FFFFFF",
			menutext: "#000000",
			activetitlebar: "#800080",
			inactivetitlebar: "#C0C0C0",
			activetitlebartext: "#FFFFFF",
			inactivetitlebartext: "#000000",
			activeborder: "rgb(128,0,255)",
			inactiveborder: "#C0C0C0",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#808080",
			highlight: "#800080",
			highlightedtext: "#FFFFFF",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#800080",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		},
		cinnamon: {
			name: "Cinnamon",
			builtin: true,
			desktop: "#804040",
			applicationworkspace: "#C0C0C0",
			windowbackground: "#FFFFFF",
			windowtext: "#000000",
			menubar: "#FFFFFF",
			menutext: "#000000",
			activetitlebar: "#800000",
			inactivetitlebar: "#C0C0C0",
			activetitlebartext: "#FFFFFF",
			inactivetitlebartext: "#000000",
			activeborder: "#800000",
			inactiveborder: "#C0C0C0",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#808080",
			highlight: "#800000",
			highlightedtext: "#FFFFFF",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#800000",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		},
		designer: {
			name: "Designer",
			builtin: true,
			desktop: "#3F7C7C",
			applicationworkspace: "#C0C0C0",
			windowbackground: "#FFFFFF",
			windowtext: "#000000",
			menubar: "#FFFFFF",
			menutext: "#000000",
			activetitlebar: "#008080",
			inactivetitlebar: "#C0C0C0",
			activetitlebartext: "#FFFFFF",
			inactivetitlebartext: "#000000",
			activeborder: "#C0C0C0",
			inactiveborder: "#C0C0C0",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#C0C0C0",
			highlight: "#008080",
			highlightedtext: "#000000",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#004040",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		},
		emeraldcity: {
			name: "Emerald City",
			builtin: true,
			desktop: "#004040",
			applicationworkspace: "#C0C0C0",
			windowbackground: "#FFFFFF",
			windowtext: "#000000",
			menubar: "#C0C0C0",
			menutext: "#000000",
			activetitlebar: "#008040",
			inactivetitlebar: "#408080",
			activetitlebartext: "#FFFFFF",
			inactivetitlebartext: "#000000",
			activeborder: "#008040",
			inactiveborder: "#408080",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#808080",
			highlight: "#008040",
			highlightedtext: "#FFFFFF",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#004040",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		},
		fluorescent: {
			name: "Fluorescent",
			builtin: true,
			desktop: "#000000",
			applicationworkspace: "#FFFFFF",
			windowbackground: "#FFFFFF",
			windowtext: "#000000",
			menubar: "#00FF00",
			menutext: "#000000",
			activetitlebar: "#FF00FF",
			inactivetitlebar: "#C0C0C0",
			activetitlebartext: "#000000",
			inactivetitlebartext: "#000000",
			activeborder: "#00FF00",
			inactiveborder: "#C0C0C0",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#808080",
			highlight: "#000000",
			highlightedtext: "#FFFFFF",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#800080",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		},
		hotdogstand: {
			name: "Hotdog Stand",
			builtin: true,
			desktop: "#FFFF00",
			applicationworkspace: "#FFFF00",
			windowbackground: "#FF0000",
			windowtext: "#FFFFFF",
			menubar: "#FFFFFF",
			menutext: "#000000",
			activetitlebar: "#000000",
			inactivetitlebar: "#FF0000",
			activetitlebartext: "#FFFFFF",
			inactivetitlebartext: "#FFFFFF",
			activeborder: "#FF0000",
			inactiveborder: "#FF0000",
			windowframe: "#000000",
			scrollbars: "#C0C0C0",
			buttonface: "#C0C0C0",
			buttonshadow: "#808080",
			buttontext: "#000000",
			buttonhighlight: "#FFFFFF",
			disabledtext: "#808080",
			highlight: "#000000",
			highlightedtext: "#FFFFFF",
			systembuttonface: "#C0C0C0",
			systembuttonshadow: "#808080",
			systembuttontext: "#000000",
			systembuttonhighlight: "#FFFFFF",
			linkcolor: "#800000",
			posttextcolor: "#444444",
			headingcolor: "#000000"
		}
	}
}

export { globals };



