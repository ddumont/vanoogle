<?php if (!defined("APPLICATION")) exit(); 
/*
 *  (C) Copyright 2012, canofsleep.com
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */?>
<h1> <?php echo $this->Data("Title");?> </h1>
<?php
	echo $this->Form->Open();
	echo $this->Form->Errors();
?>
<ul>
	<li>
		<h3><?php echo T("Required Settings"); ?></h3>
		<ul class='CheckBoxList'>
			<li>
				<?php
					echo $this->Form->Label("Enter your Custom Search Engine ID.  If you don't have one, create one here: <a target='_blank' href='http://www.google.com/cse/'>http://www.google.com/cse/", "Plugins.Vanoogle.CSE", array(
						"class" => "CheckBoxLabel",
					));
					echo "<br>"; 
					echo $this->Form->Input("Plugins.Vanoogle.CSE", "input", array(
						"size" => "40",
						"style" => "font-family: Courier, 'Courier New', monospace;", 
					)); 
				?>
			</li>
		</ul>
	</li>
</ul>
<br>

<?php 
   echo $this->Form->Close("Save");

