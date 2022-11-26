<template>
    <div>
        <h1>Post News</h1>
        <div class="table-responsive">
            <table id="example" class="table table-striped dt-responsive nowrap" style="width:100%">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Headline</th>
                        <th>Story</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import $ from "jquery"

export default {
    name: 'nationalNews',
    data() {
        return{}
    },
    mounted() {
        $(document).ready(function () {
            $('#example').DataTable({
                
            });
        });
    }
}
</script>