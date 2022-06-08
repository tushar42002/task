let task = {
        fetchData: function (json) {
          fetch("./json.json")
            .then((response) => response.json())
            .then((data) => this.displayData(data));
        },
        displayData: function (data) {
          const data_array = data.tasks[0].assets;
          console.log(data_array);
        },
      };
      
      task.fetchData()





      const contant1 = document.querySelector('.contant-body1');
       document.querySelector('.dropdown1').onclick = function () {
           this.classList.toggle('active');
           contant1.classList.toggle('active');
       }
      const contant2 = document.querySelector('.contant-body2');
       document.querySelector('.dropdown2').onclick = function () {
           this.classList.toggle('active');
           contant2.classList.toggle('active');
       }
      const contant3 = document.querySelector('.contant-body3');
       document.querySelector('.dropdown3').onclick = function () {
           this.classList.toggle('active');
           contant3.classList.toggle('active');
       }
      const contant4 = document.querySelector('.contant-body4');
       document.querySelector('.dropdown4').onclick = function () {
           this.classList.toggle('active');
           contant4.classList.toggle('active');
       }
      const contant5 = document.querySelector('.contant-body5');
       document.querySelector('.dropdown5').onclick = function () {
           this.classList.toggle('active');
           contant5.classList.toggle('active');
       }
      const contant6 = document.querySelector('.contant-body6');
       document.querySelector('.dropdown6').onclick = function () {
           this.classList.toggle('active');
           contant6.classList.toggle('active');
       }


      
      