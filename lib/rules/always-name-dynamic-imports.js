const commentRegex = /\bwebpackChunkName: ["'].+["']/

function isValidComment(comment) {
  return comment.value.match(commentRegex);
}

function isBlockComment(comment) {
  return comment.type === 'Block'
}

function isLineComment(comment) {
  return comment.type === 'Line'
}

module.exports = {
  meta: {
    docs: {
      description: 'All dynamic imports must have a `webpackChunkName` comment.',
      category: 'Best Practices',
      recommended: true,
      uri: ''
    }
  },

  create: function(context) {
    const source = context.getSourceCode()

    return {
      'ImportExpression': function (node) {
        const { leading, trailing } = source.getComments(node.source)

        console.log(leading, trailing)

        const hasValidComment = leading
          .filter(isBlockComment)
          .find(isValidComment)

        const hasLineComment = leading
          .filter(isLineComment)
          .find(isValidComment)

        if (!hasValidComment) {
          if (trailing.length > 0) {
            context.report(node, `webpack comment must come before dynamic import`)
          } else if (hasLineComment) {
            context.report(node, 'webpackChunkName comment cannot be in // comment')
          } else {
            context.report(node, `import doesn't have 'webpackChunkName:' https://webpack.js.org/guides/code-splitting/#dynamic-imports`)
          }
        }
      }
    }
  }
}
