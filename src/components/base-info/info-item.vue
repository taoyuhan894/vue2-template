<template>
  <div class="info_item">
    <p
      class="info_item_label"
      :style="labelStyle">
      <slot name="label">{{label}}</slot>
    </p>

    <template v-if="valueType === 'text'">
      <p class="info_item_value"> <slot>{{value}}</slot></p>
    </template>

    <template v-if="valueType === 'image'">
      <el-image
        :style="{
          width: imageWidth,
          height: imageHeight
        }"
        :src="value"
        :fit="imageFit">
      </el-image>
    </template>

    <template v-if="valueType === 'image-list'">
      <div class="images">
        <div class="images_item" v-for="(src, index) in value" :key="index">
          <el-image
            :style="{
              width: imageWidth,
              height: imageHeight
            }"
            :src="src"
            :fit="imageFit">
          </el-image>
        </div>
      </div>
    </template>

    <template v-if="valueType === 'custom'">
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  inject: {
    info: { default: {} }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    valueType: {
      type: String,
      default: 'text',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['text', 'image', 'image-list', 'custom'].indexOf(value) !== -1
      }
    },
    imageWidth: {
      type: String,
      default: '120px'
    },
    imageHeight: {
      type: String,
      default: '120px'
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    value: {
      type: [String, Array],
      default: ''
    }
  },
  computed: {
    // label 宽
    labelStyle () {
      // console.log('this.info', this.info, this.info.labelWidth)
      const ret = {}
      const labelWidth = this.labelWidth || (this.info && this.info.labelWidth)
      if (labelWidth) {
        ret.width = labelWidth
        ret.minWidth = labelWidth
      }
      return ret
    }
  }
}
</script>

<style lang="scss" scoped>
.info_item {
  min-height: 32px;
  margin-bottom: 22px;
  display: flex;
  font-size: 14px;
  &_label {
    flex: none;
    padding: 0px 10px 0px 0;
    line-height: 32px;
    color: #909399;
  }
  &_value {
    flex: 1;
    padding: 6px 0;
    line-height: 20px;
    color: #303133;
    word-break: break-all;
  }
}
.images {
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
  &_item {
    // width: 120px;
    // height: 120px;
    margin: 5px;
  }
}
</style>
