<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <title>TIC TAC TOE</title>
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/custom.css">
        <script src="js/jquery.js"></script>
        <script src="js/custom.js"></script>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <?php 
            $ua = $_SERVER['HTTP_USER_AGENT'];
            $iphone = strpos($ua,"iPhone");
            $safari = strpos($ua,"Safari"); 
            if ($iphone == true && $safari == false){
                echo '<style type="text/css"> div#statusbar{ 
                    background: darkgray; height: 35pt; width:950px; 
                    position:-webkit-sticky; top:0;} </style>';
            }
            else{
                echo '<style type="text/css"> div#sidebar{ display:none;} </style>';
            }
        ?>
        
        
<!--<script type="text/javascript">
$(document).ready(function(){
    $(".tooltip-examples a").tooltip({
        placement : 'top'
    });
});
</script>-->
    </head>
    <body>
        <!--INCLUDES THE NAVIGATION BAR-->
        <?php include 'navigation.php'?>
        
        <!--MAIN SITE HEADER / JUMBOTRON-->
<!--        <div class="jumbotron alert-info" id="topJumbo">
            <div class="page-header" id="headerTitle">
                <h1>Tic Tac Toe <small id="headerTitleSmall"></small></h1>
            </div>
        </div>-->
        <!--ENDO OF HEADER / JUMBOTRON-->
        
        <!--MAIN BODY SECTION-->
        <div class="container-fluid center-block" id="mainBody">
            <div class="panel">
                <div class="panel-heading">
                    <h2 class="panel-title" id="panelTitle">
                        
                    </h2>
                </div>
                <div class="panel-body" id="panelBottom">
                    <div class="mainContainer">
                        <div class="col-md-6" id="leftColumn">
                            <table class="table table-condensed" id="mainTable" onclick="clicked()">
                                <th id="champHeading">Championships</th>
                                <tr>
                                    <td class="mainCell" id="sq1"></td>
                                    <td class="mainCell" id="sq2"></td>
                                    <td class="mainCell" id="sq3"></td>
                                </tr>
                                <tr>
                                    <td class="mainCell" id="sq4"></td>
                                    <td class="mainCell" id="sq5"></td>
                                    <td class="mainCell" id="sq6"></td>
                                </tr>
                                <tr>
                                    <td class="mainCell" id="sq7"></td>
                                    <td class="mainCell" id="sq8"></td>
                                    <td class="mainCell" id="sq9"></td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-md-6" id="rightcolumn">
                            <div id='rightTitle'>
                                <b id="recordedWinsText">Recorded Wins</b><br/>
                            </div>
                            <!--RIGHT COLUMN GOES HERE-->
                            <div id="p1" onclick="changeName1()">
                                O-P1, Wins-0
                            </div>
                            <div id="p2" onclick="changeName2()">
                                X-P2, Wins-0
                            </div>
                            <div id="pTurn" onclick="pTurn()">Turn O: P1</div>
                            <a onclick="resetBoard()">
                                Reset Board
                            </a>
<!--                            <br/>
                            <a onclick="resetGame()">
                                Reset Game
                            </a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--END OF MAIN BODY SECTION-->
        
        <!--INCLUDES THE FOOTER INFO-->
        <?php include 'footer.php'?>
        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="/twitter-bootstrap/twitter-bootstrap-v2/js/bootstrap-tooltip.js"></script>
        <script>  
            $(function ()  
            { $("#footPopover").popover();  
            });    
            $(function ()  
            { $("#headPopover").popover();  
            });  
        </script>
    </body>
</html>
