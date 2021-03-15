import MessageListItem from './components/MessageListItem.js';
export default {
    name: 'MessageList',
    template: `<ul>
    <li v-for="item in items" :item="item">
    {{ item.text }} - {{ item.createdAt }}
    <button @click="deleteMessage(item)">X</button></li></ul>`,
    components: {
        MessageListItem
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteMessage(message) {
            this.$emit('delete', message);
        }
    }
};