<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Post News</div>
                    <div class="card-body">
                        <div v-if="success != ''" class="alert alert-success">
                            {{success}}
                        </div>
                        <form action="">
                            <div class="mb-4">
                                <input type="text" class="form-control" placeholder="Headline">
                            </div>
                            <div class="mb-4">
                                <input type="file" class="form-control" v-on:change="onChange">
                            </div>
                            <div class="mb-4">
                                <textarea class="form-control" placeholder="Type your story here..." style="height: 100px"></textarea>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn ms-2">Post News</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'postNews',
    data() {
        return{
            success: '',
        }
    },
    methods: {
        onChange(e) {
            this.file = e.target.files[0];
        },
    },
}
</script>

<style>
.btn {
    background: #ff2942;
    color: #ffffff;
}
.btn:hover {
    background: rgb(216, 37, 37);
    color: white;
}
</style>