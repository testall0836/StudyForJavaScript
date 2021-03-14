export default {
    name: 'MessageList',
    template: `<ul>
    <li v-for="item in items" :item="item">
    {{ item.text }} - {{ item.createdAt }}
    <button @click="deleteClicked">X</button></li></ul>`,
    props: {
        items: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteClicked() {
            this.$emit('delete');
        }
    }
};