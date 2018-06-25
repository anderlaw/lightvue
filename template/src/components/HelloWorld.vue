<template>
  <el-dialog
    v-dialogdrag ="{ visible: dialogVisible}"
    title="对话框"
    :visible.sync="dialogVisible"
    width="30%">
    <span>对话框可以自由拖动</span>
    <el-input size="small" type="text" placeholder="输入内容"/>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogVisible = false">取 消</el-button>
      <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

