/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50622
 Source Host           : localhost:3306
 Source Schema         : seata_demo

 Target Server Type    : MySQL
 Target Server Version : 50622
 File Encoding         : 65001

 Date: 20/06/2021 12:38:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for seata_state_inst
-- ----------------------------
DROP TABLE IF EXISTS `seata_state_inst`;
CREATE TABLE `seata_state_inst`  (
  `id` varchar(48) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'id',
  `machine_inst_id` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'state machine instance id',
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'state name',
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'state type',
  `service_name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'service name',
  `service_method` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'method name',
  `service_type` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'service type',
  `business_key` varchar(48) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'business key',
  `state_id_compensated_for` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'state compensated for',
  `state_id_retried_for` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'state retried for',
  `gmt_started` datetime(3) NOT NULL COMMENT 'start time',
  `is_for_update` tinyint(1) NULL DEFAULT NULL COMMENT 'is service for update',
  `input_params` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'input parameters',
  `output_params` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'output parameters',
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'status(SU succeed|FA failed|UN unknown|SK skipped|RU running)',
  `excep` blob NULL COMMENT 'exception',
  `gmt_end` datetime(3) NULL DEFAULT NULL COMMENT 'end time',
  PRIMARY KEY (`id`, `machine_inst_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of seata_state_inst
-- ----------------------------

-- ----------------------------
-- Table structure for seata_state_machine_def
-- ----------------------------
DROP TABLE IF EXISTS `seata_state_machine_def`;
CREATE TABLE `seata_state_machine_def`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'id',
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'name',
  `tenant_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'tenant id',
  `app_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'application name',
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'state language type',
  `comment_` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'comment',
  `ver` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'version',
  `gmt_create` datetime(3) NOT NULL COMMENT 'create time',
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'status(AC:active|IN:inactive)',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'content',
  `recover_strategy` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'transaction recover strategy(compensate|retry)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of seata_state_machine_def
-- ----------------------------

-- ----------------------------
-- Table structure for seata_state_machine_inst
-- ----------------------------
DROP TABLE IF EXISTS `seata_state_machine_inst`;
CREATE TABLE `seata_state_machine_inst`  (
  `id` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'id',
  `machine_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'state machine definition id',
  `tenant_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'tenant id',
  `parent_id` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'parent id',
  `gmt_started` datetime(3) NOT NULL COMMENT 'start time',
  `business_key` varchar(48) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'business key',
  `start_params` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'start parameters',
  `gmt_end` datetime(3) NULL DEFAULT NULL COMMENT 'end time',
  `excep` blob NULL COMMENT 'exception',
  `end_params` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'end parameters',
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'status(SU succeed|FA failed|UN unknown|SK skipped|RU running)',
  `compensation_status` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'compensation status(SU succeed|FA failed|UN unknown|SK skipped|RU running)',
  `is_running` tinyint(1) NULL DEFAULT NULL COMMENT 'is running(0 no|1 yes)',
  `gmt_updated` datetime(3) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `unikey_buz_tenant`(`business_key`, `tenant_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of seata_state_machine_inst
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
