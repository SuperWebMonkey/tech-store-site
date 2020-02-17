<template>
  <Layout>
    <div class="products">
        {{ itemsTotal }}
      <Modal title="Add to Cart" :close="toggleAddingToCart" v-if="addingToCart">
        
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </Modal>
      <div class="products__items">
        <div
          v-for="product in products"
          :key="product.id"
          class="products__item"
        >
          <img :src="product.image" alt="" />
          <span>{{ product.name }}</span>
          <p>{{ product.description }}</p>
          <button @click="toggleAddingToCart" class="button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Modal from "@/components/misc/Modal";
export default {
  components: {
    Modal
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$api
        .get("/products")
        .then(({ data }) => {
          this.products = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    toggleAddingToCart() {
      this.addingToCart = !this.addingToCart;
    }
  },
  data() {
    return {
      products: [],
      addingToCart: false,
      items: [
        { name: "test", price: 12 },
        { name: "test1", price: 5 },
        { name: "test2", price: 4 },
        { name: "test3", price: 92 }
      ]
    };
  },
  computed: {
    itemsTotal() {
      let total = 0;
      this.items.forEach(item => {
        total += item.price;
      });
      return total;
    }
  }
};
</script>

<style>
img {
  width: 200px;
  height: auto;
}
</style>
