<aside class="w31-window reading-settings floating" id="reading-settings">
	<div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div>
	<div class="w31-window-inner">
		<div class="w31-titlebar">
			<div class="w31-menu" role="menu" tabindex="0">
				<div class="w31-minus"></div>
				<ul class="w31-dropdown">
					<li role="menuitem" class="action-exit_reading_settings">E<span>x</span>it</li>
				</ul>
			</div>
			<div class="w31-title">
				Reading Settings
			</div>
			<div class="w31-minimize w31-available action-exit_reading_settings" role="button" tabindex="0">
			</div>
			<div class="w31-maximize w31-available action-maximize_window">
			</div>
			<div class="w31-restore w31-available action-restore_window" role="button" tabindex="0">
			</div>
		</div>
		<div class="w31-topbar">
			<div class="w31-label">
				<img src="<?php echo get_template_directory_uri(); ?>/icons/PROGM018.png" alt="Reading Settings icon" />
				Reading Settings
			</div>
		</div>
		<div class="w31-content">
			<fieldset>
				<legend>Line Settings</legend>
				<div class="setting">
					<label for="linelength">Line Length (rem)</label>
					<input type="number" id="linelength" name="linelength" value="55" step="1" />
				</div>
				<div class="setting">
					<label for="linelengthmax">Maximized Line Length</label>
					<input type="number" id="linelengthmax" name="linelengthmax" value="110" step="1" />
				</div>
				<div class="setting">
					<label for="lineheight">Line Height (em)</label>
					<input type="number" id="lineheight" name="lineheight" value="1.8" step="0.1" />
				</div>
				<div class="setting">
					<label for="paragraphspacing">Paragraph Spacing (em)</label>
					<input type="number" id="paragraphspacing" name="paragraphspacing" value="1.1" step="0.1" />
				</div>
			</fieldset>

			<fieldset>
				<legend>Font Settings</legend>
				<div class="setting">
					<label for="fontfamily">Font Family</label>
					<select id="fontfamily" name="fontfamily">
						<option value="Arial">Arial</option>
						<option value="Arial Black">Arial Black</option>
						<option value="Century Schoolbook L">Century Schoolbook L</option>
						<option value="Comic Sans MS">Comic Sans</option>
						<option value="Courier New">Courier New</option>
						<option value="DejaVu Sans">DejaVu Sans</option>
						<option value="DejaVu Sans Mono">DejaVu Sans Mono</option>
						<option value="DejaVu Serif">DejaVu Serif</option>
						<option value="Droid Sans">Droid Sans</option>
						<option value="Droid Sans Mono">Droid Sans Mono</option>
						<option value="Droid Serif">Droid Serif</option>
						<option value="Georgia">Georgia</option>
						<option value="Helvetica">Helvetica</option>
						<option value="Impact">Impact</option>
						<option value="Liberation Mono">Liberation Mono</option>
						<option value="Liberation Sans">Liberation Sans</option>
						<option value="Liberation Serif">Liberation Serif</option>
						<option value="Lucida Console">Lucida Console</option>
						<option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
						<option value="Nimbus Mono L">Nimbus Mono L</option>
						<option value="Nimbus Roman No9 L">Nimbus Roman No9 L</option>
						<option value="Nimbus Sans L">Nimbus Sans L</option>
						<option value="Palatino Linotype">Palatino Linotype</option>
						<option value="Tahoma">Tahoma</option>
						<option value="Times New Roman">Times New Roman</option>
						<option value="Trebuchet MS">Trebuchet MS</option>
						<option value="Ubuntu">Ubuntu</option>
						<option value="Ubuntu Condensed">Ubuntu Condensed</option>
						<option value="Ubuntu Light">Ubuntu Light</option>
						<option value="Ubuntu Mono">Ubuntu Mono</option>
						<option value="URW Bookman L">URW Bookman L</option>
						<option value="URW Chancery L">URW Chancery L</option>
						<option value="URW Gothic L">URW Gothic L</option>
						<option value="URW Palladio L">URW Palladio L</option>
						<option value="Verdana">Verdana</option>
					</select>
				</div>
				<div class="setting">
					<label for="fontsize">Font Size (rem)</label>
					<input type="number" id="fontsize" name="fontsize" value="1.2" step="0.1" />
				</div>
			</fieldset>
			<div class="note">Note: These fonts must be installed on your system. I'm not wasting bandwidth to send you Comic Sans.</div>

			<fieldset>
				<legend>Screensaver</legend>
				<div class="setting">
					<label for="enablescreensaver">Enable Screensaver</label>
					<input type="checkbox" id="enablescreensaver" name="enablescreensaver" />
				</div>
				<div class="setting">
					<label for="screensaverdelay">Delay (minutes)</label>
					<input type="number" id="screensaverdelay" name="screensaverdelay" value="10" step="1" />
				</div>
			</fieldset>

			<div class="w31-flexbar">
				<button class="w31-button action-test_screensaver">Test Screensaver</button>
				<button class="w31-button action-reset_reading_settings">Reset</button>
			</div>
		</div>
		<div class="w31-bottombar">
			<div class="w31-bottombar-inner">
				Reading settings are saved to localStorage.
			</div>
		</div>
	</div>
</aside>