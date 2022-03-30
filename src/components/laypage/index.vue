<template>
  <el-pagination
    class="pagination"
    background
    @current-change="handleCurrentChange"
    :current-page="pageInfo.pageNum"
    :page-size="pageInfo.pageSize"
    layout="total, prev, pager, next, jumper"
    :total="pageInfo.total">
  </el-pagination>
</template>

<script>
export default {
  props: {
    pageInfo: {
      type: Object,
      default: () => ({
        pageNum: 1,
        pageSize: 5,
        total: 10
      })
    }
  },
  methods: {
    handleCurrentChange (newNum) {
      this.$emit('paginationChange', newNum)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  height: 48px;
  justify-content: center;
  margin-top: 20px;
}
</style>