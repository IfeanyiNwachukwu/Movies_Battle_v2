class MediaComparer{
    RunComparison = () => {
        const leftSideStats = document.querySelectorAll('#left-summary .notification');
    
        const righSideStats = document.querySelectorAll('#right-summary .notification');
    
        leftSideStats.forEach((leftStat,index) => {
            const rightStat = righSideStats[index];
    
            const leftStatValue = leftStat.dataset.value;
           
            const rightStatValue = rightStat.dataset.value;
    
            if(rightStatValue > leftStatValue){
                leftStat.classList.remove('is-primary');
                leftStat.classList.add('is-warning');
            }
            else{
                rightStat.classList.remove('is-primary');
                rightStat.classList.add('is-warning');
            }
           
        });
       
    }
}