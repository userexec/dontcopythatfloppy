<aside class="w31-window color-settings floating" id="color-settings">
	<div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div>
	<div class="w31-window-inner">
		<div class="w31-titlebar">
			<div class="w31-menu" role="menu" tabindex="0">
				<div class="w31-minus"></div>
				<ul class="w31-dropdown">
					<li role="menuitem" class="action-exit_color_settings">E<span>x</span>it</li>
				</ul>
			</div>
			<div class="w31-title">
				Color Settings
			</div>
			<div class="w31-minimize w31-available action-exit_color_settings" role="button" tabindex="0">
			</div>
			<div class="w31-maximize w31-available action-maximize_window">
			</div>
			<div class="w31-restore w31-available action-restore_window" role="button" tabindex="0">
			</div>
		</div>
		<div class="w31-topbar w31-flexbar">
			<div class="w31-label">
				<img id="w31-theme-switcher-button" src="<?php echo get_template_directory_uri(); ?>/icons/PBRUS001.png" alt="Color Settings icon" />
				Color Settings
			</div>
			<select id="w31-theme-switcher" name="w31-theme-switcher">
			</select>
		</div>
		<div class="w31-content">
			<div id="w31-color-fields">
				<fieldset>
					<legend>Windows 3.1 Theme Colors</legend>
					<div class="setting">
						<label for="desktop">Desktop</label>
						<input type="color" id="desktop" name="desktop" value="#008080" />
					</div>
					<div class="setting">
						<label for="applicationworkspace">Application Workspace</label>
						<input type="color" id="applicationworkspace" name="applicationworkspace" value="#c0c0c0" />
					</div>
					<div class="setting">
						<label for="windowbackground">Window Background</label>
						<input type="color" id="windowbackground" name="windowbackground" value="#ffffff" />
					</div>
					<div class="setting">
						<label for="windowtext">Window Text</label>
						<input type="color" id="windowtext" name="windowtext" value="#000000" />
					</div>
					<div class="setting">
						<label for="menubar">Menu Bar</label>
						<input type="color" id="menubar" name="menubar" value="#ffffff" />
					</div>
					<div class="setting">
						<label for="menutext">Menu Text</label>
						<input type="color" id="menutext" name="menutext" value="#000000" />
					</div>
					<div class="setting">
						<label for="activetitlebar">Active Title Bar</label>
						<input type="color" id="activetitlebar" name="activetitlebar" value="#000080" />
					</div>
					<div class="setting">
						<label for="inactivetitlebar">Inactive Title Bar</label>
						<input type="color" id="inactivetitlebar" name="inactivetitlebar" value="#c0c0c0" />
					</div>
					<div class="setting">
						<label for="activetitlebartext">Active Title Bar Text</label>
						<input type="color" id="activetitlebartext" name="activetitlebartext" value="#ffffff" />
					</div>
					<div class="setting">
						<label for="inactivetitlebartext">Inactive Title Bar Text</label>
						<input type="color" id="inactivetitlebartext" name="inactivetitlebartext" value="#000000" />
					</div>
					<div class="setting">
						<label for="activeborder">Active Border</label>
						<input type="color" id="activeborder" name="activeborder" value="#c0c0c0" />
					</div>
					<div class="setting">
						<label for="inactiveborder">Inactive Border</label>
						<input type="color" id="inactiveborder" name="inactiveborder" value="#c0c0c0" />
					</div>
					<div class="setting">
						<label for="windowframe">Window Frame</label>
						<input type="color" id="windowframe" name="windowframe" value="#000000" />
					</div>
					<div class="setting">
						<label for="scrollbars">Scrollbars</label>
						<input type="color" id="scrollbars" name="scrollbars" value="#c0c0c0" />
					</div>
					<div class="setting">
						<label for="buttonface">Button Face</label>
						<input type="color" id="buttonface" name="buttonface" value="#c0c0c0" />
					</div>
					<div class="setting">
						<label for="buttonshadow">Button Shadow</label>
						<input type="color" id="buttonshadow" name="buttonshadow" value="#808080" />
					</div>
					<div class="setting">
						<label for="buttontext">Button Text</label>
						<input type="color" id="buttontext" name="buttontext" value="#000000" />
					</div>
					<div class="setting">
						<label for="buttonhighlight">Button Highlight</label>
						<input type="color" id="buttonhighlight" name="buttonhighlight" value="#ffffff" />
					</div>
					<div class="setting">
						<label for="disabledtext">Disabled Text</label>
						<input type="color" id="disabledtext" name="disabledtext" value="#c0c0c0" />
					</div>
					<div class="setting">
						<label for="highlight">Highlight</label>
						<input type="color" id="highlight" name="highlight" value="#000080" />
					</div>
					<div class="setting">
						<label for="highlightedtext">Highlighted Text</label>
						<input type="color" id="highlightedtext" name="highlightedtext" value="#ffffff" />
					</div>
				</fieldset>

				<fieldset>
					<legend>Windows 3.1 System Colors</legend>
					<div class="setting">
						<label for="systembuttonface">System Button Face</label>
						<input type="color" id="systembuttonface" name="systembuttonface" value="#c0c0c0" />
					</div>
					<div class="setting">
						<label for="systembuttonshadow">System Button Shadow</label>
						<input type="color" id="systembuttonshadow" name="systembuttonshadow" value="#808080" />
					</div>
					<div class="setting">
						<label for="systembuttontext">System Button Text</label>
						<input type="color" id="systembuttontext" name="systembuttontext" value="#000000" />
					</div>
					<div class="setting">
						<label for="systembuttonhighlight">System Button Highlight</label>
						<input type="color" id="systembuttonhighlight" name="systembuttonhighlight" value="#ffffff" />
					</div>
				</fieldset>

				<fieldset>
					<legend>Blog Colors</legend>
					<div class="setting">
						<label for="linkcolor">Link Color</label>
						<input type="color" id="linkcolor" name="linkcolor" value="#000080" />
					</div>
					<div class="setting">
						<label for="headingcolor">Heading Color</label>
						<input type="color" id="headingcolor" name="headingcolor" value="#000000" />
					</div>
					<div class="setting">
						<label for="posttextcolor">Post Text Color</label>
						<input type="color" id="posttextcolor" name="posttextcolor" value="#444" />
					</div>
				</fieldset>
			</div>

			<div class="w31-savetheme w31-flexbar">
				<form name="savetheme">
					<input type="text" class="w31-input-text" placeholder="Theme name..." value="" disabled>
					<input type="submit" class="w31-button" value="Save Theme" disabled>
				</form>
				<input type="button" class="w31-button action-delete_theme" value="Delete Theme">
			</div>
			<div class="w31-importcopytheme w31-flexbar">
				<form name="importtheme">
					<input type="text" class="w31-input-text" placeholder="JSON string..." value="">
					<input type="submit" class="w31-button" value="Import Theme">
				</form>
				<input type="button" class="w31-button action-copy_theme" value="Copy Theme">
			</div>
		</div>
		<div class="w31-bottombar">
			<div class="w31-bottombar-inner">
				Color settings are saved to localStorage.
			</div>
		</div>
	</div>
</aside>