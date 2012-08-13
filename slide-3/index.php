<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8" />
	<title>New Slider with JS Advance</title>
	<link type="text/css" rel="stylesheet" href="../reset.css" />
	<link type="text/css" rel="stylesheet" href="style.css" />
	<script type="text/javascript" src="script.js"></script>
	<script type="text/javascript" src="../zepto.js"></script>
</head>
<body>
	<div class="container">
		<div class="slider">
			<div class="slides">
				<?php
					$image_path = "../image/slide3";
					$image = scandir($image_path);
					foreach ($image as $pic) {
						$pic_arr = explode('.',$pic);
						$pic_type = strtolower (end ($pic_arr));
						if ($pic_type == 'jpg') {
							echo "<div style=\"background-image:url('../image/slide3/$pic');\"></div>";	
						}
					}
				?>
			</div>
		</div>
	</div>
</body>
</html>