export const ScoreBoard=(Scores)=>{
  const refreshBtn=document.getElementById('refresh');
  const board=document.querySelector('.board');

  refreshBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const scores_ = JSON.parse(localStorage.getItem('Scores') || []);
    let boardHtml='';
    if(scores_){
      Scores=scores_;
      Scores.forEach(player => {
       boardHtml+=` <tr>
        <td>${player.Name}: ${player.Score}</td>
    </tr>`
      });
      board.innerHTML=boardHtml;
    } 
  })
  localStorage.setItem('Scores',JSON.stringify(Scores));
}