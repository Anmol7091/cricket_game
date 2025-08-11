
        let score;
        //object to store result data
        let scoreStr=localStorage.getItem('score');
        resetScore(scoreStr);


        function resetScore(scoreStr){
            score = JSON.parse(localStorage.getItem('score')) || {
                win: 0,
                tie: 0,
                lost: 0,
            };
            score.displayScore =function(){
                return `Score: won:${score.win},lost${score.lost},tie${score.tie}`;
            }
            showResult();

        }
        
        
        
        
        
        function generateComputerChoice(){
            
            let randomNumber = Math.random() * 3;
            if(randomNumber>0 && randomNumber<=1){
                return 'Bat';
                
        
            
            }else if(randomNumber>1 && randomNumber<=2){
                return 'Ball';
                
        
            }else {
                return 'Stump';
                
            }
            
            
        }
        function getResult(userMove, computerMove){
            if(userMove=== 'Bat'){
                if(computerMove==='Ball'){
                    score.win++;
                    return 'User won';
            
                }else if(computerMove==='Bat'){
                    score.tie++;
                    return `It's a tie`;
                }else{
                    score.lost++;
                    return 'computer won'
                }
            }else if(userMove==='Ball'){
                if(computerMove==='Stump'){
                    score.win++;
                    return 'User won';
            
                }else if(computerMove==='Ball'){
                    score.tie++;
                    return `It's a tie`;
                }else{
                    score.lost++;
                    return 'computer won'
                }

            }else if(userMove==='Stump'){
                
                if(computerMove==='Bat'){
                    score.win++;
                    return 'User won';
            
                }else if(computerMove==='Stump'){
                    score.tie++;
                    return `It's a tie`;
                }else{
                    score.lost++;
                    return 'computer won'
                }
            }
        }
        function showResult(userMove, computerMove, resultMsg){
            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('#user-move').innerText= userMove ? `You have choosen ${userMove}`:'';

            document.querySelector('#computer-move').innerText=computerMove ? `Computer have choosen ${computerMove}`:'';
            

            document.querySelector('#result').innerText=resultMsg ? resultMsg:'';

            document.querySelector('#score').innerText=score.displayScore();
            

        }
