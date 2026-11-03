(function(){
  const cards=document.querySelectorAll('.treasury-grid article');
  const values=[
    ['settlement program','TBA','not deployed'],
    ['$RIMUN contract','6f1e…pump','6f1e2d1GiAECwu7U587CRNg3vf23TkLU72rBAm43pump'],
    ['parasite bond','TBA','parameter not published'],
    ['verifier quorum','2×','independent repair replay']
  ];
  cards.forEach((card,index)=>{
    const value=values[index];
    if(!value)return;
    const label=card.querySelector('small'),strong=card.querySelector('strong'),note=card.querySelector('span');
    if(label)label.textContent=value[0];
    if(strong)strong.textContent=value[1];
    if(note)note.textContent=value[2];
  });
  const command=document.querySelector('.treasury-workstation .work-command em');
  if(command)command.innerHTML='<i></i> pre-launch · no on-chain treasury claimed';
})();
