<template>
  <div class="container">
    <async-component></async-component>
    <h2>Динамические и ассинхронные компоненты</h2>
    <div class="btns">
      <app-button ref="myBtn" :color="oneColor" @action="choosenButton = 1">One</app-button>
      <!-- Получение доступа к компоненту через ref -->
      <app-button :color="twoColor" @action="choosenButton = 2">Two</app-button>
    </div>
    <!-- <app-text-one v-if="choosenButton == 1"></app-text-one>
    <app-text-two v-else></app-text-two> -->
    <!-- ЭТо все хорошо но если их 20 то будет не очень -->
    <!-- keep-alive сохраняет состояние компонента, и не дает перерисовывать его полностью, то есть если в нем есть какой-то инпут,
    его значение сохранится -->
    <keep-alive>
      <component :is="getComponent"></component>
    </keep-alive>
    <!-- component заменяет себя компонентом, имя которого указано в is -->
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppTextOne from './AppTextOne.vue';
import AppTextTwo from './AppTextTwo.vue';

export default {
  data(){
    return {
      choosenButton: 1,
    }
  },
  mounted(){
    console.log(this.$refs.myBtn);
    this.$refs.myBtn.BtnLog();
  },
  computed: {
    // getComponent(){
    //   return this.choosenButton == 1 ? "app-text-one" : "app-text-two"
    // },
    //демонстарция расширенного синтаксиса computed свойств
    //по умолчанию все computed свойства это геттеры, но мы так же можем сделать и сеттер
    getComponent: {
      get(){
        return this.choosenButton == 1 ? "app-text-one" : "app-text-two";
      },
      set(value){
        console.log(value);
        //вызов сеттера: this.getComponent = "shwabledable"
      }
    },
    oneColor(){
      return this.choosenButton == 1 ? "choosen" : "notChoosen";
    },
    twoColor(){
      return this.choosenButton == 2 ? "choosen" : "notChoosen";
    }
  },
  components: {
    "app-button": AppButton,
    'app-text-one': AppTextOne,
    'app-text-two': AppTextTwo,
  }
}
</script>

<style>

</style>
