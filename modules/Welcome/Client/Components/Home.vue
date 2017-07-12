<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>John Doe</p>
                        <p>
                            {{ status.created_at | ago }}
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body"></div>
                </div>

                <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
import Status from '~/modules/Status/Client/Factories/Status'
import AddToStream from '../components/AddToStream'

export default {
    components: {
        AddToStream
    },

    data() {
        return {
            statuses: []
        }
    },

    filters: {
        ago(date) {
            return Moment.utc(date).fromNow()
        }
    },

    created() {
        Status.all(statuses => this.statuses = statuses)
    },

    methods: {
        addStatus(status) {
            this.statuses.unshift(status)
        }
    }
}
</script>
