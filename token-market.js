(function(){
  function mount(){
    const host=document.querySelector('.treasury-summary');
    if(!host||document.querySelector('.token-market'))return;
    const panel=document.createElement('section');
    panel.className='token-market';
    panel.innerHTML=`<header><div><i></i><b>$RIMUN / SOL</b><span>LIVE</span></div><a href="https://pump.fun/coin/GSAQLVXmThQEvmwknXzimLHTXjjiiN4GYH69G1Dupump" target="_blank" rel="noopener noreferrer">PUMP.FUN ↗</a></header><div class="token-market-grid"><article><small>CONTRACT ADDRESS</small><strong>GSAQ…pump</strong><em>GSAQLVXmThQEvmwknXzimLHTXjjiiN4GYH69G1Dupump</em></article><article><small>MARKET</small><strong>LIVE</strong><em>PUMP.FUN</em></article><article><small>NETWORK</small><strong>SOLANA</strong><em>MAINNET</em></article><article><small>PARASITE BOND</small><strong>TBA</strong><em>PROTOCOL PARAMETER</em></article><article><small>HOST PAYMENT</small><strong>OUTCOME</strong><em>VERIFIED REPAIRS ONLY</em></article><article><small>SETTLEMENT</small><strong>ATOMIC</strong><em>REPAIR RECEIPT</em></article></div><footer><span>$RIMUN IS LIVE</span><span class="agent-gate">VERIFY THE CA BEFORE TRADING</span><a href="#manual" data-route="manual">READ PROTOCOL ↗</a></footer>`;
    host.querySelector('.subhead')?.after(panel);
  }
  mount();
})();
