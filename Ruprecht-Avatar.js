let angle = 0;
function setup() {
  background(0);
  noLoop();
  angleMode(DEGREES);
}

let x = 400;
let y = 200;

function HairBackdrop(x, y) {
  //HairBackdrop
  noStroke();
  fill(207, 159, 163); //darkerPalerose
  triangle(304, 222, 230, 290, 278, 305); //L
  triangle(304, 222, 350, 198, 273, 293);
  triangle(230, 290, 212, 341, 282, 296);
  triangle(248, 314, 247, 365, 301, 377);
  triangle(301, 377, 247, 314, 300, 285);
  triangle(247, 365, 255, 388, 340, 381);
  triangle(232, 290, 270, 240, 304, 222);
  triangle(269, 250, 229, 240, 307, 223); //LTopStrand
  triangle(229, 240, 208, 223, 270, 235);
  triangle(208, 223, 205, 209, 222, 228);
  triangle(481, 218, 537, 260, 531, 317); //R
  triangle(537, 260, 558, 360, 459, 307);
  triangle(535, 344, 522, 404, 451, 325);
  fill(237, 199, 202); //paleRose
  triangle(230, 292, 198, 374, 245, 315); //L
  triangle(564, 386, 533, 345, 548, 321);
  console.log("HairBackdrop");
}

function Neck(x, y) {
  //neck
  fill(41, 41, 48);
  rect(345, 416, 110, 70);
  console.log("Neck");
}

function RuprechtsBodyPart1(x, y) {
  //Body
  fill(99, 7, 41); //wineRed
  rect(329, 485, 140, 120);
  fill(41, 41, 64); //prussianBlue
  triangle(260, 460, 195, 480, 264, 567); //Larm
  rect(195, 480, 100, 120);
  triangle(195, 480, 173, 605, 264, 605);
  triangle(548, 460, 605, 480, 536, 567); //Rarm
  rect(505, 480, 100, 120);
  triangle(605, 480, 627, 605, 536, 605);
  rect(260, 585, 290, 20); //Base
  rect(260, 460, 70, 140); //Lbody
  rect(490, 460, 60, 145); //Rbody
  triangle(342, 602, 314, 579, 360, 585);
  triangle(401, 595, 473, 565, 455, 604);
  //MidShade
  fill(36, 36, 59); //darkerBlueshade
  triangle(224, 469, 257, 514, 293, 509); //L
  triangle(212, 475, 258, 515, 230, 471);
  triangle(270, 535, 286, 559, 351, 576);
  triangle(270, 535, 262, 514, 294, 501);
  triangle(307, 564, 299, 584, 393, 596);
  triangle(250, 542, 262, 605, 262, 564); //Larm
  triangle(424, 598, 480, 590, 482, 569); //R
  triangle(456, 590, 465, 605, 509, 605);
  triangle(456, 590, 509, 605, 535, 582);
  triangle(490, 522, 520, 580, 459, 574);
  triangle(485, 532, 530, 540, 525, 500);
  triangle(550, 542, 537, 605, 537, 564); //Rarm
  console.log("RuprechtsBodyPart1");
}

function RuprechtsBodyPart2(x, y) {
  //BodyShade
  fill(33, 33, 54); //darkPrussian
  triangle(408, 599, 307, 576, 315, 554); //Lshade
  triangle(274, 460, 279, 533, 316, 460);
  triangle(270, 510, 327, 508, 314, 550);
  triangle(420, 597, 464, 586, 460, 580); //Rshade
  triangle(526, 460, 500, 460, 509, 490);
  triangle(526, 460, 525, 531, 480, 525);
  triangle(507, 565, 486, 508, 486, 575);
  //Details
  triangle(260, 502, 263, 605, 260, 605); //Lline
  triangle(260, 502, 262, 502, 263, 605);
  rect(296, 528, 1, 77);
  triangle(249, 538, 262, 560, 262, 570);
  triangle(543, 605, 540, 605, 535, 460); //Rline
  triangle(543, 605, 537, 460, 535, 460);
  rect(503, 528, 1, 77);
  triangle(551, 538, 538, 560, 538, 570);
  //Folds
  fill(41, 41, 64); //prussianBlue
  triangle(412, 600, 320, 570, 319, 483); //LFold
  triangle(322, 527, 280, 520, 285, 447);
  triangle(285, 447, 329, 441, 319, 524);
  triangle(478, 527, 520, 520, 515, 447); //RFold
  triangle(515, 447, 471, 441, 481, 524);
  triangle(403, 596, 482, 476, 498, 563);
  //FoldShade
  fill(36, 36, 59); //darkerBlue
  triangle(287, 447, 322, 523, 342, 457); //L
  triangle(513, 447, 478, 523, 458, 457); //R
  //Inner
  fill(79, 4, 38); //darkWinered
  triangle(405, 593, 399, 585, 410, 585); //LShade
  triangle(380, 561, 410, 585, 405, 593);
  triangle(366, 541, 343, 517, 412, 497);
  triangle(435, 547, 365, 478, 462, 495); //RShade
  console.log("RuprechtsBodyPart2");
}

function CrossNCloth(x, y) {
  //theCross
  fill(247, 189, 153); //roseGold
  rect(399, 550, 6, 34); //Cross
  rect(393, 574, 18, 6);
  //cloth thing
  fill(76, 78, 92); //coldGrey
  triangle(400, 485, 367, 534, 327, 423); //L
  triangle(400, 485, 433, 534, 473, 423); //R
  triangle(535, 460, 516, 460, 536, 484);
  triangle(536, 484, 517, 482, 516, 460);
  console.log("CrossNCloth");
}

function Cape(x, y) {
  //Cape
  fill(84, 32, 105); //purple
  triangle(280, 512, 248, 493, 267, 454); //Up
  triangle(284, 456, 281, 520, 267, 454);
  triangle(248, 493, 221, 473, 267, 454);
  triangle(211, 477, 222, 464, 252, 466);
  triangle(247, 470, 254, 456, 267, 454);
  triangle(189, 518, 149, 566, 155, 605); //Low
  triangle(155, 605, 174, 605, 188, 518);
  console.log("Cape");
}

function LongHairPart(x, y) {
  //Hair strands
  fill(252, 232, 234); //warmWhite
  triangle(284, 432, 352, 416, 360, 505); //L
  triangle(324, 493, 285, 433, 347, 446);
  triangle(360, 505, 323, 467, 320, 560);
  triangle(360, 504, 319, 560, 347, 541);
  triangle(320, 560, 278, 543, 323, 531);
  triangle(278, 543, 270, 517, 301, 538);
  triangle(270, 517, 283, 503, 283, 529);
  triangle(516, 432, 448, 416, 440, 505); //R
  triangle(476, 493, 515, 433, 453, 446);
  triangle(445, 545, 470, 505, 485, 600);
  triangle(450, 545, 485, 600, 458, 581);
  triangle(485, 600, 527, 583, 482, 571);
  triangle(527, 583, 535, 557, 504, 578);
  triangle(535, 557, 522, 543, 522, 569);
  triangle(442, 553, 440, 505, 458, 581);
  triangle(476, 493, 448, 548, 431, 509);
  triangle(434, 424, 431, 509, 448, 543);
  triangle(434, 424, 456, 417, 445, 525);
  triangle(432, 509, 442, 552, 470, 502);
  triangle(476, 494, 434, 512, 477, 466);
  triangle(458, 582, 458, 551, 446, 552);
  triangle(485, 600, 474, 562, 505, 578);
  console.log("LongHairPart");
}

function StrandsShade(x, y) {
  //ShadeStrands
  fill(237, 199, 202); //paleRose
  triangle(314, 479, 354, 444, 351, 409); //LShade
  triangle(315, 479, 290, 441, 347, 417);
  triangle(248, 342, 247, 367, 258, 396);
  triangle(248, 342, 275, 368, 256, 383);
  triangle(300, 538, 325, 539, 334, 528);
  triangle(433, 459, 454, 449, 435, 390); //RShade
  triangle(426, 416, 462, 473, 500, 378);
  triangle(485, 479, 512, 442, 461, 453);
  triangle(503, 577, 470, 569, 461, 555);
  console.log("StrandsShade");
}

function RuprechtsHead(x, y) {
  //Ruprechts Head
  fill(186, 37, 62); //red
  circle(400, 300, 200, 200);
  triangle(370, 420, 430, 420, 400, 315); //Chin
  triangle(370, 420, 320, 370, 405, 410); //L
  triangle(430, 420, 480, 370, 395, 410); //R
  triangle(320, 370, 298, 328, 405, 410); //L
  triangle(480, 370, 502, 328, 395, 410); //R
  triangle(298, 328, 402, 328, 400, 410);
  console.log("RuprechtsHead");
}

function MagentaShadeHead(x, y) {
  //Magenta shade head
  fill(148, 19, 73); //magenta
  rect(303, 270, 200, 60);
  rect(350, 252, 140, 50);
  fill(168, 24, 53); //darker red
  rect(307, 317, 200, 20);
  fill(148, 19, 73); //magenta
  rect(348, 332, 3, 40); //L Line
  rect(450, 332, 3, 40); //R Line
  fill(120, 12, 79); //fuchsia
  rect(311, 250, 170, 40);
  fill(105, 19, 80); //Magenta
  rect(348, 275, 3, 40); //L Line
  rect(450, 264, 3, 50); //R Line
  console.log("MagentaShadeHead");
}

function Eyes(x, y) {
  //Eyes
  fill(33, 9, 14); //darkAmber
  circle(354, 317, 45); //L
  circle(446, 317, 45); //R
  fill(46, 16, 16); //Amber
  circle(354, 320, 30); //L
  circle(446, 320, 30); //R
  fill(33, 9, 14); //darkAmber
  circle(354, 318, 15); //L
  circle(446, 318, 15); //R

  console.log("Eyes");
}

function Gasmask(x, y) {
  //mask
  fill(41, 41, 48); //ColeBlack
  rect(385, 352, 30, 5); //MBlackComponent
  triangle(385, 352, 378, 365, 399, 368); //LMidCompound
  triangle(385, 352, 369, 367, 382, 379); //L
  triangle(415, 352, 423, 367, 401, 368); //RMidCompound
  triangle(415, 352, 431, 368, 418, 379); //R
  fill(133, 133, 148); //lightSteel
  rect(370, 370, 60, 70);
  triangle(390, 355, 410, 355, 400, 370); //M
  triangle(390, 355, 370, 370, 400, 360); //L
  triangle(410, 355, 430, 370, 400, 360); //R
  triangle(400, 358, 370, 370, 430, 370); //M
  triangle(370, 440, 387, 362, 290, 379); //L
  triangle(430, 440, 412, 362, 510, 379); //R
  triangle(340, 376, 309, 355, 370, 371); //L
  triangle(460, 376, 491, 355, 430, 371); //R
  //RoundThings
  triangle(279, 426, 318, 462, 341, 436); //LeftRoundThing
  triangle(279, 426, 249, 385, 280, 372); //L
  triangle(279, 426, 280, 372, 341, 436); //L
  triangle(310, 356, 296, 386, 363, 385); //L
  triangle(521, 426, 482, 462, 459, 436); //RightRoundThing
  triangle(521, 426, 551, 385, 520, 372); //R
  triangle(521, 426, 520, 372, 459, 436); //R
  triangle(490, 356, 504, 386, 363, 385);
  circle(310, 407, 70, 90); //L
  circle(490, 407, 70, 90); //R
  console.log("Gasmask");
}

function BlackMaskComponents(x, y) {
  //BlackComponents
  fill(41, 41, 48); //ColeBLack
  triangle(298, 359, 310, 340, 355, 368); //LBlackComponent
  triangle(355, 372, 342, 365, 377, 364);
  triangle(379, 363, 346, 375, 301, 360);
  triangle(502, 359, 490, 340, 445, 368); //RBlackComponent
  triangle(445, 372, 458, 365, 422, 364);
  triangle(421, 363, 454, 375, 499, 360);
  triangle(344, 422, 313, 382, 330, 387); //L
  triangle(456, 422, 486, 382, 470, 387); //R
  console.log("BlackMaskComponents");
}

function MaskShading(x, y) {
  //maskShading
  fill(121, 121, 140); //darkSteel
  rect(376, 375, 50, 70); //Mid
  fill(133, 133, 148); //lightSteel
  rect(380, 380, 42, 60); //Mid
  fill(121, 121, 140); //darkSteel
  rect(385, 384, 32, 51); //Mid
  fill(133, 133, 148); //lightSteel
  rect(387, 386, 28, 46);
  fill(144, 151, 166); //silver
  triangle(280, 375, 250, 387, 315, 418); //L
  triangle(520, 375, 550, 387, 485, 418); //R
  fill(99, 7, 41); //wineRed
  triangle(260, 395, 302, 437, 316, 458); //LInner
  triangle(260, 395, 270, 430, 316, 458);
  triangle(270, 430, 260, 395, 254, 392);
  triangle(540, 395, 498, 437, 484, 458); //RInner
  triangle(540, 395, 530, 430, 484, 458);
  triangle(530, 430, 540, 395, 546, 392);
  fill(41, 41, 48);
  rect(393, 395, 16, 4);
  rect(393, 408, 16, 4);
  rect(393, 420, 16, 4);
  console.log("MaskShading");
}

function RuprechtsEars(x, y) {
  //RuprechtEars
  fill(186, 37, 62); //red
  triangle(231, 237, 287, 360, 310, 318); //LEar
  triangle(231, 237, 236, 240, 284, 291);
  fill(168, 24, 53); //darkRed
  triangle(268, 320, 247, 261, 296, 333); //LShade
  triangle(268, 320, 289, 366, 310, 330);
  fill(186, 37, 62); //red
  triangle(569, 237, 513, 360, 490, 318); //REar
  triangle(569, 237, 564, 240, 516, 291);
  fill(168, 37, 62); //darkRed
  triangle(531, 320, 553, 261, 504, 333); //RShade
  triangle(531, 320, 511, 366, 490, 330);
  fill(148, 19, 73); //magenta
  triangle(247, 261, 289, 323, 298, 352); //L
  triangle(553, 261, 511, 323, 502, 352); //R
  console.log("RuprechtsEars");
}

function HairShadeNBackBangs(x, y) {
  //HairShade and Back bangs
  fill(237, 199, 202); //paleRose
  triangle(314, 295, 313, 350, 279, 320); //LFront
  triangle(285, 310, 290, 372, 350, 400);
  triangle(312, 348, 318, 383, 279, 320);
  triangle(283, 292, 271, 317, 326, 285);
  triangle(283, 291, 339, 235, 319, 293);
  triangle(486, 295, 487, 350, 515, 320); //RFront
  triangle(517, 310, 510, 372, 450, 400);
  console.log("HairShadeNBackBangs");
}

function RuprechtsHair(x, y) {
  //RuprechtHair
  fill(252, 232, 234); //warmWhite
  triangle(350, 386, 395, 260, 433, 278); //MidStrand
  triangle(386, 298, 381, 246, 430, 216);
  triangle(430, 215, 402, 264, 433, 279);
  triangle(439, 278, 413, 326, 354, 380);
  triangle(360, 374, 438, 280, 399, 253);
  triangle(438, 280, 445, 253, 404, 265);
  triangle(388, 247, 283, 322, 345, 222); //LeftStrand
  triangle(283, 322, 252, 331, 308, 285);
  triangle(345, 222, 429, 218, 383, 249);
  triangle(432, 280, 454, 234, 429, 219);
  triangle(279, 299, 299, 234, 353, 221);
  triangle(488, 316, 427, 221, 481, 233); //RightStrand
  triangle(479, 235, 517, 313, 490, 342);
  triangle(298, 235, 341, 202, 370, 233); //L
  triangle(502, 235, 459, 202, 370, 233); //R
  triangle(413, 233, 516, 313, 501, 234);
  triangle(281, 322, 290, 372, 350, 400); //LUnder
  triangle(519, 322, 510, 372, 450, 400); //RUnder
  triangle(501, 261, 531, 307, 510, 372);
  triangle(501, 235, 531, 307, 510, 372);
  console.log("RuprechtsHair");
}

function RuprechtsHat(x, y) {
  //Hat
  fill(41, 41, 64); //prussianBlue
  rect(350, 200, 100, 42);
  triangle(350, 242, 310, 214, 351, 201); //LUnder
  triangle(450, 242, 490, 214, 449, 201); //RUnder
  fill(99, 7, 41); //wineRed
  rect(350, 235, 100, 10);
  triangle(350, 235, 350, 245, 312, 216); //L
  triangle(450, 235, 450, 245, 488, 216); //R
  fill(21, 19, 28); //darkBlue
  rect(332, 186, 140, 25); //MidPart
  triangle(313, 217, 334, 193, 346, 211); //L
  triangle(487, 217, 476, 193, 454, 211); //R
  fill(115, 26, 68); //Raspberry
  rect(338, 140, 124, 46); //TopHat
  triangle(337, 141, 365, 126, 365, 153); //TopL
  triangle(463, 141, 435, 126, 435, 153); //TopR
  rect(365, 126, 70, 20); //TopM
  triangle(293, 199, 340, 138, 317, 220); //L
  triangle(339, 139, 317, 216, 338, 192);
  triangle(337, 193, 344, 185, 331, 182);
  triangle(507, 199, 460, 138, 483, 220); //R
  triangle(461, 139, 483, 216, 462, 192);
  triangle(463, 193, 456, 185, 469, 182);
  fill(97, 25, 78); //RaspberryShade
  triangle(292, 199, 317, 220, 342, 186); //LHatshade
  triangle(307, 181, 292, 199, 319, 210);
  triangle(508, 199, 483, 220, 458, 186); //RHatshade
  triangle(493, 181, 508, 199, 481, 210);
  fill(21, 19, 28); //darkBlue
  triangle(344, 185, 311, 217, 316, 221); //L
  triangle(456, 185, 489, 217, 484, 221); //R
  fill(247, 189, 153); //roseGold
  rect(375, 185, 7, 26); //Llogo
  rect(420, 185, 7, 26);
  console.log("RuprechtsHat");
}

function draw() {
  //recall Function
  HairBackdrop();
  Neck();
  RuprechtsBodyPart1();
  RuprechtsBodyPart2();
  CrossNCloth();
  Cape();
  LongHairPart();
  StrandsShade();
  RuprechtsHead();
  MagentaShadeHead();
  Eyes();
  Gasmask();
  BlackMaskComponents();
  MaskShading();
  RuprechtsEars();
  HairShadeNBackBangs();
  RuprechtsHair();
  RuprechtsHat();
}

function drawEyes() {
  background(0);
  push();
  translate(200, 200);
  scale(2, 2);
  fill(33, 9, 14); //darkAmber
  circle(354, 318, 15); //L
  circle(446, 318, 15); //R
  pop();
}
